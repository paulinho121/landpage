$urls = @(
    'http://if0_40111582.epizy.com',
    'https://if0_40111582.epizy.com',
    'http://if0_40111582.rf.gd',
    'https://if0_40111582.rf.gd'
)

foreach ($u in $urls) {
    Write-Host "Checking: $u"
    try {
        $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
        Write-Host "  Status: $($r.StatusCode)"
        $body = $r.Content
        $snippet = if ($body.Length -gt 800) { $body.Substring(0,800) + '...'} else { $body }
        Write-Host "  Body snippet (first 800 chars):"
        Write-Host $snippet
    } catch {
        Write-Host "  ERROR: $_" -ForegroundColor Yellow
    }
    Write-Host ""
}
