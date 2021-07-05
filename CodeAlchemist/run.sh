#!/bin/bash
dotnet bin/Main.dll rewrite "/home/bz/unicornt/MI-PJ/1.conf"
dotnet bin/Main.dll instrument "/home/bz/unicornt/MI-PJ/1.conf"
dotnet bin/Main.dll fuzz "/home/bz/unicornt/MI-PJ/1.conf"
