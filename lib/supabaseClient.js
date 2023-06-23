import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://dqbgmbtxdkeafyvhgrrn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxYmdtYnR4ZGtlYWZ5dmhncnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM0NzYzNTcsImV4cCI6MTk4OTA1MjM1N30.YA1dnTJz7kjlTfTx-HrEVRVmvPUifIvrSEcFGAEx7ek');