SELECT id, uid, name, email, created, updated
  FROM "grafana.team"
 WHERE org_id = 0
   AND id > 1
 ORDER BY id asc
 LIMIT 2
