use anchor_lang::prelude::*;

declare_id!("Alme1111111111111111111111111111111111111");

#[program]
pub mod alme_liquidity {
    use super::*;

    pub fn initialize_pool(ctx: Context<InitializePool>) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.authority = *ctx.accounts.authority.key;
        pool.total_liquidity = 0;
        Ok(())
    }

    pub fn add_liquidity(ctx: Context<AddLiquidity>, amount: u64) -> Result<()> {
        let pool = &mut ctx.accounts.pool;
        pool.total_liquidity += amount;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializePool<'info> {
    #[account(init, payer = authority, space = 8 + 64)]
    pub pool: Account<'info, LiquidityPool>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AddLiquidity<'info> {
    #[account(mut)]
    pub pool: Account<'info, LiquidityPool>,
}

#[account]
pub struct LiquidityPool {
    pub authority: Pubkey,
    pub total_liquidity: u64,
}
