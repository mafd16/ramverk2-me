@echo off
taskkill /f /im node.exe
set DEBUG=redovisa:* & npm start
