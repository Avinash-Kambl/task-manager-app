create database taskmanagerapp;
use task_manager_app;

create table users(
id int auto_increment primary key,
name varchar(100),
email varchar(100),
mobile int(15)
);

create table tasks (
id int auto_increment primary key,
user_id int,
task_name varchar(250),
task_status enum('pending', 'done'),
foreign key (user_id) references users(id)
);

