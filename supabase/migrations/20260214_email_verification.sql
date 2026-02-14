-- Email verification columns
ALTER TABLE leads ADD COLUMN IF NOT EXISTS email_verified BOOLEAN DEFAULT false;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS verification_token TEXT;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS token_expires_at TIMESTAMPTZ;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS verified_at TIMESTAMPTZ;

-- Store full simulation input + result for token-based result display
ALTER TABLE leads ADD COLUMN IF NOT EXISTS simulation_data JSONB;

-- Indexes for token lookup and verified lead queries
CREATE INDEX IF NOT EXISTS idx_leads_token ON leads(verification_token) WHERE verification_token IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_leads_verified ON leads(email_verified);
