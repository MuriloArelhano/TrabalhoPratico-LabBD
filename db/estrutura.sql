-- IMPORTANTE: A convenção da forma de escrita dos nomes das colunas foram feitas assim, por conta da aplicação!
drop schema if exists trabalhofinal cascade;

create schema trabalhofinal;
set search_path to trabalhofinal;

create table candidato (
    id numeric null,
    nomeUrna text null,
    numero numeric null,
    idCandidatoSuperior numeric null,
    nomeCompleto text null,
    descricaoSexo text null,
    dataDeNascimento DATE null,
    tituloEleitor numeric null,
    cpf text not null,
    descricaoEstadoCivil text null,
    descricaoCorRaca text null,
    descricaoSituacao text null,
    nacionalidade text null,
    grauInstrucao text null,
    ocupacao text null,
    vices text null,
    gastoCampanha1T float null,
    gastoCampanha2T numeric null,
    sgUfNascimento text null,
    nomeMunicipioNascimento text null,
    localCandidatura text null,
    ufCandidatura text null,
    ufSuperiorCandidatura text null,
    dataUltimaAtualizacao DATE null,
    fotoUrl text null,
    fotoDataUltimaAtualizacao text null,
    descricaoTotalizacao text null,
    nomeColigacao text null,
    composicaoColigacao text null,
    numeroProcessoDrap numeric null,
    numeroProcessoDrapEncrypt text null,
    numeroProcesso numeric null,
    numeroProcessoEncrypt text null,
    numeroProcessoPrestContas text null,
    numeroProcessoPrestContasEncrypt text null,
    numeroProtocolo text null,
    totalDeBens float null,
    substituto text null,
    motivos text null,
    codigoSituacaoCandidato numeric null,
    descricaoSituacaoCandidato text null,
    st_SUBSTITUIDO BOOL null,
    descricaoNaturalidade text null,
    st_MOTIVO_AUSENCIA_REQUISITO BOOL null,
    st_MOTIVO_CONDUTA_VEDADA BOOL null,
    cnpjcampanha numeric null,
    gastoCampanha float null,
    st_MOTIVO_ABUSO_PODER BOOL null,
    st_MOTIVO_COMPRA_VOTO BOOL null,
    ds_MOTIVO_OUTROS text null,
    st_MOTIVO_GASTO_ILICITO BOOL null,
    st_MOTIVO_IND_PARTIDO BOOL null,
    st_MOTIVO_FICHA_LIMPA BOOL null,
    st_DIVULGA_ARQUIVOS BOOL null,
    st_DIVULGA_BENS BOOL null,
    st_DIVULGA BOOL null,
    st_REELEICAO BOOL null
);



create table cargo(
    id_candidato numeric null,
    codigo numeric not null,
    sigla text null,
    nome text null,
    codSuperior numeric null,
    titular BOOL null,
    contagem numeric null
);


create table bens(
    id_candidato numeric null,
    ordem numeric null,
    descricao text null,
    descricaoDeTipoDeBem text null,
    valo float null,
    dataUltimaAtualizacao DATE null
);



create table partido(
    id_candidato numeric null,
    numero numeric null,
    sigla text null,
    nome text null
);


create table eleicao(
    id_candidato numeric null,
    id numeric null,
    siglaUF text null,
    localidadeSgUe text null,
    ano numeric null,
    codigo numeric null,
    nomeEleicao text null,
    tipoEleicao text null,
    turno numeric null,
    tipoAbrangencia text null,
    dataEleicao DATE null,
    codSituacaoEleicao numeric null,
    descricaoSituacaoEleicao text null,
    descricaoEleicao text null
);



create table email(
    id_candidato numeric null,
    email text null
);



create table site(
    id_candidato numeric null,
    siteUrl text null
);



create table arquivo(
    id_candidato numeric null,
    idArquivo numeric null,
    nome text null,
    url text null,
    tipo text null,
    codTipo text null,
    fullFilePath text null,
    fileInputStream text null,
    fileByteArray text null
);


create table eleicao_anterior(
    id_candidato numeric null,
    id text null,
    nrAno numeric null, 
    nomeUrna text null,
    nomeCandidato text null,
    idEleicao text null,
    sgUe text null,
    local text null,
    cargo text null,
    partido text null,
    situacaoTotalizacao text null,
    txLink text null

);

alter table candidato add primary key (id);

alter table cargo add constraint fk_candidato_cargo foreign key (id_candidato) references candidato(id);

alter table bens add constraint fk_candidato_bens foreign key (id_candidato) references candidato(id);

alter table partido add constraint fk_candidato_partido foreign key (id_candidato) references candidato(id);

alter table eleicao add primary key (id);
alter table eleicao add constraint fk_candidato_eleicao foreign key (id_candidato) references candidato(id);

alter table email add constraint fk_candidato_email foreign key (id_candidato) references candidato(id);

alter table site add constraint fk_candidato_site foreign key (id_candidato) references candidato(id);

alter table arquivo add primary key (idArquivo);
alter table arquivo add constraint fk_candidato_arquivo foreign key (id_candidato) references candidato(id);

alter table eleicao_anterior add primary key (id);
alter table eleicao_anterior add constraint fk_candidato_eleicao_anterior foreign key (id_candidato) references candidato(id);