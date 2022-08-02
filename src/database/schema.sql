drop table if exists brindes;

create table brindes(
	id serial primary key,
 	nome text,
 	quantidade int not null
);

insert into brindes(nome, quantidade) values('joker', 5);
insert into brindes(nome, quantidade) values('bane', 5);
insert into brindes(nome, quantidade) values('twoface', 5);