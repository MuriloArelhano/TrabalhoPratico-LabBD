CREATE TABLE candidato (
    id INT NULL,
    nomeUrna TEXT NULL,
    numero INT NULL,
    idCandidatoSuperior INT NULL,
    nomeCompleto TEXT NULL,
    descricaoSexo TEXT NULL,
    dataDeNascimento DATE NULL,
    tituloEleitor INT NULL,
    cpf TEXT NOT NULL,
    descricaoEstadoCivil TEXT NULL,
    descricaoCorRaca TEXT NULL,
    descricaoSituacao TEXT NULL,
    nacionalidade TEXT NULL,
    grauInstrucao TEXT NULL,
    ocupacao TEXT NULL,
    gastoCampanha1T FLOAT NULL,
    gastoCampanha2T INT NULL,
    sgUfNascimento TEXT NULL,
    nomeMunicipioNascimento TEXT NULL,
    localCandidatura TEXT NULL,
    ufCandidatura TEXT NULL,
    ufSuperiorCandidatura TEXT NULL,
    dataUltimaAtualizacao DATE NULL,
    fotoUrl TEXT NULL,
    fotoDataUltimaAtualizacao TEXT NULL,
    descricaoTotalizacao TEXT NULL,
    nomeColigacao TEXT NULL,
    composicaoColigacao TEXT NULL,
    numeroProcessoDrap INT NULL,
    numeroProcessoDrapEncrypt TEXT NULL,
    numeroProcesso INT NULL,
    numeroProcessoEncrypt TEXT NULL,
    numeroProcessoPrestContas TEXT NULL,
    numeroProcessoPrestContasEncrypt TEXT NULL,
    numeroProtocolo TEXT NULL,
    totalDeBens FLOAT NULL,
    substituto TEXT NULL,
    motivos TEXT NULL,
    codigoSituacaoCandidato INT NULL,
    descricaoSituacaoCandidato TEXT NULL,
    st_SUBSTITUIDO BOOL NULL,
    descricaoNaturalidade TEXT NULL,
    st_MOTIVO_AUSENCIA_REQUISITO BOOL NULL,
    st_MOTIVO_CONDUTA_VEDADA BOOL NULL,
    cnpjcampanha INT NULL,
    gastoCampanha FLOAT NULL,
    st_MOTIVO_ABUSO_PODER BOOL NULL,
    st_MOTIVO_COMPRA_VOTO BOOL NULL,
    ds_MOTIVO_OUTROS TEXT NULL,
    st_MOTIVO_GASTO_ILICITO BOOL NULL,
    st_MOTIVO_IND_PARTIDO BOOL NULL,
    st_MOTIVO_FICHA_LIMPA BOOL NULL,
    st_DIVULGA_ARQUIVOS BOOL NULL,
    st_DIVULGA_BENS BOOL NULL,
    st_DIVULGA BOOL NULL,
    st_REELEICAO BOOL NULL
);

CREATE TABLE cargo(
    codigo NUMERIC NOT NULL,
    id_candidato NUMERIC NULL,
    sigla TEXT NULL,
    nome TEXT NULL,
    cod_superior NUMERIC NULL,
    titular BOOL NULL,
    contagem NUMERIC NULL
);

CREATE TABLE bens(
    id_candidato NUMERIC NULL,
    ordem INT NULL,
    descricao TEXT NULL,
    descricao_de_tipo_de_bem TEXT NULL,
    valo FLOAT NULL,
    data_utima_atualizacao DATE NULL
);

CREATE TABLE partido(
    id_candidato NUMERIC NULL,
    numero INT NULL,
    sigla TEXT NULL,
    nome TEXT NULL
);

CREATE TABLE eleicao(
    id_candidato NUMERIC NULL,
    id NUMERIC NULL,
    sigla_UF TEXT NULL,
    localidade_sg_ue TEXT NULL,
    ano INT NULL,
    codigo NUMERIC NULL,
    nome_eleicao TEXT NULL,
    tipo_eleicao TEXT NULL,
    turno INT NULL,
    tipo_abrangencia TEXT NULL,
    data_eleicao DATE NULL,
    cod_situcao_eleicao INT NULL,
    descricao_situacao_eleicao TEXT NULL,
    descricao_eleicao TEXT NULL
);

CREATE TABLE email(
    id_candidato NUMERIC NULL,
    email TEXT NULL
);

CREATE TABLE site(
    id_candidato NUMERIC NULL,
    site_url TEXT NULL
);

CREATE TABLE arquivo(
    id_candidato NUMERIC NULL,
    id_arquivo NUMERIC NULL,
    nome TEXT NULL,
    url TEXT NULL,
    tipo TEXT NULL,
    cod_tipo TEXT NULL,
    full_file_path TEXT NULL,
    file_input_stream TEXT NULL,
    file_byte_array TEXT NULL
);

CREATE TABLE eleicao_anterior(
    id_candidato NUMERIC NULL,
  
);