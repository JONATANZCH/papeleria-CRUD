*Init proyect
- pm2 start ecosystem.config.js
# Fork mode
pm2 start app.js --name my-api # Name process


*And to freeze a process list for automatic respawn
- pm2 save


*Stop the server 
- pm2 stop

# Restart all processes
pm2 restart all  

ESTA CONECTADO AL PUERO localhost:4000