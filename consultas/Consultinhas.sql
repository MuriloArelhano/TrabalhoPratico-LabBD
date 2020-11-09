select candidato.id, cargo.id_candidato, candidato.nomeCompleto, cargo.nome, partido.sigla, eleicao.ano,
email.email, site.siteUrl, eleicao_anterior.nrAno, vices.nm_urna from trabalhofinal.candidato
join trabalhofinal.cargo on candidato.id = cargo.id_candidato
join trabalhofinal.partido on candidato.id = partido.id_candidato
join trabalhofinal.eleicao on candidato.id = eleicao.id_candidato
join trabalhofinal.email on candidato.id = email.id_candidato
join trabalhofinal.site on candidato.id = site.id_candidato
-- join trabalhofinal.arquivo on candidato.id = arquivo.id_candidato (ta multiplicando muito as coluna)
join trabalhofinal.eleicao_anterior on candidato.id = eleicao_anterior.id_candidato
join trabalhofinal.vices on candidato.id = vices.id_candidato
where cargo.nome ilike '%feito%'