# NODEJS


Run the apt update command on your Ubuntu to update package repository contents database.
	```sudo apt update```

After system update, install Node.js 14 on Ubuntu / Debian by first installing the required repository.
```curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -```


You can begin the installation of Node.js 14 on Ubuntu & Debian Linux:
```sudo apt -y install nodejs```

Verify the version of Node.js installed.
```node  -v```
```npm install -g npm@6```

# Install Angular
First  install  angular CLI
```npm install -g @angular/cli```

after that clone the project 

```git clone https://github.com/mahmoud481/todo-frontend.git```

```cd todo-frontend```

To Install The npm packages run:
```npm install```

If you want to change the API URL to a local server, simply edit `src/environments/environment.ts` and change `api_url` to the local server's URL (i.e. `localhost:8000/api`)
To run The project run:
```ng s -o```
Now your application is ready.
