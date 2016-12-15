# appTracker

### Server side REST ([Spring](https://spring.io)) and client side ([Angular2](https://angular.io)) for a job application tracking system

A basic project to assist me with my job hunt as well as sharpen/learn new skills.

AppTracker is not only a useful application that I will use during my current job hunt, but also sample code that I can submit to potential employers.

The application is a simple Java REST server built on [Spring Data JPA](http://projects.spring.io/spring-data-jpa) (backed by a [MySQL](https://www.mysql.com/) database) and an [Angular2](https://angular.io) client which utilizes [ng-bootstrap](https://ng-bootstrap.github.io) and other modules.

I have also implemented [SpringFox](http://springfox.github.io/springfox/) (swagger) on the server side to allow for easy manual REST testing and documentation.  This can be accessed via *server-URL*/swagger-ui.html

:notebook:**Note:** *This is a work in progress and is not fully functional, polished or secure.*

#### Live Demo Server:
Client: http://www.podk.com/appTracker/
<br>REST Implementation (Swagger): http://podk.com:8080/swagger-ui.html
<br>:notebook:**Note:** *A cron job is setup to reset the backend server on an hourly basis.*
