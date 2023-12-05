create database ChaTesch;

use ChaTesch;

drop table users;

create table users(
	user varchar(15) primary key,
    email varchar(50) unique key,
    password varchar(255),
    profile_photo MEDIUMBLOB
);

create table messages(
	id_message int primary key auto_increment,
	text varchar(2000),
    sender_user varchar(50) not null,
    receiver_user varchar(50) not null,
    image MEDIUMBLOB,
    message_dt datetime,
    foreign key (sender_user) references users(user),
    foreign key (receiver_user) references users(user)
);