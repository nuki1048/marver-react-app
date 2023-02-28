/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import thor from "../../resources/img/thor.jpeg";
import "./CharInfo.scss";
const CharInfo = () => {
	return (
		<div class="char__info">
			<div class="char__basics">
				<img src={thor} alt="abyss" />
				<div>
					<div class="char__info-name">thor</div>
					<div class="char__btns">
						<a href="#" class="button button__main">
							<div class="inner">homepage</div>
						</a>
						<a href="#" class="button button__secondary">
							<div class="inner">Wiki</div>
						</a>
					</div>
				</div>
			</div>
			<div class="char__descr">
				In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother
				of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world
				serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the
				father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred
				to as the father of Váli in the Prose Edda.
			</div>
			<div class="char__comics">Comics:</div>
			<ul class="char__comics-list">
				<li class="char__comics-item">All-Winners Squad: Band of Heroes (2011) #3</li>
				<li class="char__comics-item">Alpha Flight (1983) #50</li>
				<li class="char__comics-item">Amazing Spider-Man (1999) #503</li>
				<li class="char__comics-item">Amazing Spider-Man (1999) #504</li>
				<li class="char__comics-item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
				<li class="char__comics-item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
				<li class="char__comics-item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
				<li class="char__comics-item">Vengeance (2011) #4</li>
				<li class="char__comics-item">Avengers (1963) #1</li>
				<li class="char__comics-item">Avengers (1996) #1</li>
			</ul>
			<p class="char__select">Please select a character to see information</p>
		</div>
	);
};

export default CharInfo;
