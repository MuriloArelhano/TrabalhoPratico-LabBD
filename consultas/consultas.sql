-- Qual o partido tem mais candidatos?

-- select nome, sigla, max(countsg)
-- from (select nome, sigla, count(sigla) as countsg from partido GROUP BY nome, sigla) as tablecount 
-- group by nome, sigla
-- order by max desc
-- limit 1

-- Quantos homens e quantas mulheres são candidatos?

-- select descricaosexo, count(descricaosexo) as numsexo
-- from candidato 
-- group by descricaosexo


-- Faça uma ordenação decrescente da quantidade de candidatos por cor/raça declaradas

-- select descricaoCorRaca, count(descricaoCorRaca) as numcorraca
-- from candidato 
-- group by descricaoCorRaca
-- order by numcorraca desc


-- Qual o candidato tem a maior quantidade de Bens declarados?

-- select candidato.id, candidato.nomeCompleto, count(bens) as numcorraca
-- from bens 
-- join candidato on candidato.id = bens.id_candidato
-- group by id, nomeCompleto
-- order by numcorraca desc
-- limit 1

-- Liste os 10 candidatos mais idosos? Em caso de empate, liste ordenado pelo nome do candidato.

-- select nomeCompleto, extract(year from datadenascimento) from candidato
-- order by datadenascimento, nomeCompleto
-- limit 10


-- Quais os bens mais valiosos declarados (Ordenar decrescentemente os 10 maiores).

-- select descricao, valor from bens
-- order by valor desc
-- limit 10


















