drop table if exists users;  
drop table if exists item;


create table users(
    id serial primary key,
    email text unique not null,
    name_ text not null,
    admin_ boolean default false

);



create table item(
    id serial primary key,
    name_ text not null,
    date_of_purchase text,
    bill_number text not null,
    supplier_address text,
    quantity text not null,
    rate text not null,
    amount text not null,
    colour text,
    warranty_period text,
    remarks text,
    admin_id integer
);