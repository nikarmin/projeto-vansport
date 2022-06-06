create schema VanSport

-- cidades - rmc

-- Tabela para Cidades -> da RMC

create table Cidade (
  idCidade INT IDENTITY (1,1) NOT NULL,
  nome varchar(120) not null,
  PRIMARY KEY CLUSTERED (idCidade ASC)
)

insert into Cidade(nome) values 
('Americana'),
('Artur Nogueira'),
('Campinas'),
('Cosmópolis'),
('Engenheiro Coelho'),
('Holambra'),
('Hortolândia'),
('Indaiatuba'),
('Itatiba'),
('Jaguariúna'),
('Monte Mor'),
('Morungaba'),
('Nova Odessa'),
('Paulínia'),
('Pedreira'),
('Santa Bárbara do Oeste'),
('Santo Antônio de Posse'),
('Sumaré'),
('Valinhos'),
('Vinhedo')

-- Tabela para o sexo (f, m...)

create table Sexo(
 idSexo INT IDENTITY (1,1) NOT NULL,
 sexo varchar(10),
 PRIMARY KEY CLUSTERED (idSexo ASC)
)

-- Tabela do Turno de cada Aluno

create table Turno(
 idTurno INT IDENTITY (1,1) NOT NULL,
 nomeTurno varchar(15),
 PRIMARY KEY CLUSTERED ([idTurno] ASC)
)

-- Tabela do motorista

create table Motorista(
 idMotorista INT IDENTITY (1,1) NOT NULL,
 cpf varchar(11) not null,
 email varchar(50) not null,
 senha varchar(10) not null,
 nome varchar(50) not null,
 numeroCelular varchar(11) not null,
 foto varchar(100),
 cep varchar(8) not null,
 numero varchar(8) not null,
 idSexo int,
 idCidade int not null,
 foreign key(idCidade) references Cidade(idCidade),
 foreign key(idSexo) references Sexo(idSexo),
 PRIMARY KEY CLUSTERED (idMotorista ASC)
)

select * from Turno

delete from Cidade where idCidade = 1

Insert into Turno (nomeTurno) values ('Matutino')
insert into Turno (nomeTurno) values ('Vespertino')
insert into Turno (nomeTurno) values ('Noturno')
insert into Turno (nomeTurno) values ('Diurno')

drop table Turno

-- Tabela do veículo do motorista

create table Veiculo(
 idVeiculo int primary key,
 placa varchar(7) not null,
 modelo varchar(50) not null,
 marca varchar(20),
 cor varchar(20),
 anoFabricacao int not null,
 capacidade int not null,
 idMotorista int not null,
 foreign key(idMotorista) references Motorista(idMotorista)
)

-- Tabela do Aluno

/*create table Aluno(
 idAluno int primary key,
 nome varchar(50) not null,
 cep int not null,
 numero int not null,
 foreign key(idCidade) references Cidade(idCidade),
 foreign key(idTurno) references Turno(idTurno),
 foreign key(idMotorista) references Motorista(idMotorista)
)*/

-- Tabela do Cliente

create table Cliente(
 idCliente INT IDENTITY (1,1) NOT NULL,
 cpf varchar(11) not null,
 nome varchar(50) not null,
 email varchar(50) not null,
 senha varchar(10) not null,
 numeroCelular varchar(11) not null,
 cep varchar(8) not null,
 numero varchar(8) not null,
 foto varchar(100),
 idCidade int not null,
 idTurno int not null,
 idSexo int,
 foreign key(idCidade) references Cidade(idCidade),
 foreign key(idTurno) references Turno(idTurno),
 foreign key(idSexo) references Sexo(idSexo),
 PRIMARY KEY CLUSTERED (idCliente ASC)
)

-- Avaliação para cada Motorista

create table Avaliacao(
 idAvaliacao int primary key,
 comentario varchar(100),
 estrela int not null,
 comentarioData date,
 idCliente int not null,
 idMotorista int not null,
 foreign key(idCliente) references Cliente(idCliente),
 foreign key(idMotorista) references Motorista(idMotorista)
)

-- tabela do 'classroom' 
-- id do classrom
-- idDoMotorista que criou a tabela

create table Sala(
 idSala int primary key,
 idMotorista int not null,
 nome varchar(100),
 foreign key(idMotorista) references Motorista(idMotorista)
)

-- Conexão da sala com os clientes

create table SalaClientes(
 idSalaClientes int primary key,
 idSala int not null,
 idCliente int not null,
 foreign key(idSala) references Sala(idSala),
 foreign key(idCliente) references Cliente(idCliente)
)

-- Tabela de Avisos (tipo um classroom)

create table Aviso(
 idAviso int primary key,
 texto varchar(500) not null,
 foto varchar(100),
 idSala int not null,
 idMotorista int not null,
 foreign key(idSala) references Sala(idSala),
 foreign key(idMotorista) references Motorista(idMotorista)
)

-- Tabela de chat entre motorista e cliente

create table Chat(
 idChat int primary key,
 idMotorista int not null,
 idCliente int not null,
 foreign key(idCliente) references Cliente(idCliente),
 foreign key(idMotorista) references Motorista(idMotorista)
)

-- Tabela de mensagem (armazenamento)

create table Mensagem(
 idMensagem int primary key,
 mensagem text,
 mensagemData datetime,
 idCliente int,
 idMotorista int,
 idChat int not null,
 foreign key(idChat) references Chat(idChat),
 foreign key(idCliente) references Cliente(idCliente),
 foreign key(idMotorista) references Motorista(idMotorista)
)