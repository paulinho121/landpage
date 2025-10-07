# Monitor script: checa o domínio a cada 2 minutos por até 2 horas (60 tentativas)
param(
  [string]$Url = 'http://cuckold.great-site.net',
  [int]$IntervalSec = 120,
  [int]$MaxAttempts = 60
)
$log = "monitor-log.txt"
Write-Host "Starting monitor for $Url (interval $IntervalSec s, max $MaxAttempts attempts). Log: $log"
for ($i=1; $i -le $MaxAttempts; $i++) {
  Write-Host "Attempt $i/$MaxAttempts..."
  try {
    $r = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 15 -ErrorAction Stop
    $body = $r.Content
    # Heuristic: site final provavelmente contém '<!DOCTYPE html>' and title not containing 'DNS Resolution Error'
    if ($body -match '<!DOCTYPE html>' -and $body -notmatch 'DNS Resolution Error') {
      $snippet = if ($body.Length -gt 800) { $body.Substring(0,800) + '...' } else { $body }
      $msg = "READY at attempt $i`nStatus: $($r.StatusCode)`nSnippet:`n$snippet"
      Add-Content -Path $log -Value $msg
      Write-Host $msg
      Exit 0
    } else {
      $msg = "Not ready (attempt $i). Status: $($r.StatusCode)"
      Add-Content -Path $log -Value $msg
      Write-Host $msg
    }
  } catch {
    $err = "Error on attempt $i: $_"
    Add-Content -Path $log -Value $err
    Write-Host $err
  }
  Start-Sleep -Seconds $IntervalSec
}
Write-Host "Monitor finished without seeing final site after $MaxAttempts attempts. See $log for details."; Exit 1
