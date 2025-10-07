param([string]$url = 'http://cuckold.great-site.net')
try {
    $r = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    Write-Host "STATUS: $($r.StatusCode)"
    $s = $r.Content
    if ($s.Length -gt 800) { $s = $s.Substring(0,800) + '...' }
    Write-Host $s
} catch {
    Write-Host "ERROR: $_"
}