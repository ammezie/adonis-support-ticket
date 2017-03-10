# adonis-support-ticket
A support ticket application in AdonisJs

## Getting Started

Clone the project repository by running the command below if you use SSH

```
git clone git@github.com:ammezie/adonis-support-ticket.git
```

If you use https, use this instead

```
git clone https://github.com/ammezie/adonis-support-ticket.git
```

Run the command below to install Laravel dependencies 

```
npm install
```

## Setting Up
Duplicate `.env.example` and rename it `.env`

### Database And Migrations
Setup your database:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

```
./ace migration:run
```

### Mail Driver
Specify mail driver:

```
MAIL_DRIVER=log
```

And finally, start the application:

```
npm run serve:dev
```

and visit [http://localhost:3333/](http://localhost:3333/) to see the application in action.