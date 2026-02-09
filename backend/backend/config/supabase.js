const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = https://lrjaghlfouwokvzwlyfd.supabase.co;
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxyamFnaGxmb3V3b2t2endseWZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1ODEyMDQsImV4cCI6MjA4NjE1NzIwNH0.ccxY1zxLGV6GOVrHmEhshBnubtNAvmG6G396NZeDJxc;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
