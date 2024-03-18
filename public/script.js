// import Scoreboard from './Models/mongoose.js';
const pokemonNames = [`abomasnow`, `abra`, `absol`, `accelgor`, `aegislash-shield`, `aerodactyl`, `aggron`, `aipom`, `alakazam`, `alcremie`, `alomomola`, `altaria`, `amaura`, `ambipom`, `amoonguss`, `ampharos`, `anorith`, `appletun`, `applin`, `araquanid`, `arbok`, `arcanine`, `arceus-normal`, `archen`, `archeops`, `arctovish`, `arctozolt`, `ariados`, `armaldo`, `aromatisse`, `aron`, `arrokuda`, `articuno`, `audino`, `aurorus`, `avalugg`, `axew`, `azelf`, `azumarill`, `azurill`, `bagon`, `baltoy`, `banette`, `barbaracle`, `barboach`, `barraskewda`, `basculin-red-striped`, `bastiodon`, `bayleef`, `beartic`, `beautifly`, `beedrill`, `beheeyem`, `beldum`, `bellossom`, `bellsprout`, `bergmite`, `bewear`, `bibarel`, `bidoof`, `binacle`, `bisharp`, `blacephalon`, `blastoise`, `blaziken`, `blipbug`, `blissey`, `blitzle`, `boldore`, `boltund`, `bonsly`, `bouffalant`, `bounsweet`, `braixen`, `braviary`, `breloom`, `brionne`, `bronzong`, `bronzor`, `bruxish`, `budew`, `buizel`, `bulbasaur`, `buneary`, `bunnelby`, `burmy-plant`, `butterfree`, `buzzwole`, `cacnea`, `cacturne`, `calyrex`, `camerupt`, `carbink`, `carkol`, `carnivine`, `carracosta`, `carvanha`, `cascoon`, `castform`, `caterpie`, `celebi`, `celesteela`, `centiskorch`, `chandelure`, `chansey`, `charizard`, `charjabug`, `charmander`, `charmeleon`, `chatot`, `cherrim-overcast`, `cherubi`, `chesnaught`, `chespin`, `chewtle`, `chikorita`, `chimchar`, `chimecho`, `chinchou`, `chingling`, `cinccino`, `cinderace`, `clamperl`, `clauncher`, `clawitzer`, `claydol`, `clefable`, `clefairy`, `cleffa`, `clobbopus`, `cloyster`, `coalossal`, `cobalion`, `cofagrigus`, `combee`, `combusken`, `comfey`, `conkeldurr`, `copperajah`, `corphish`, `corsola`, `corviknight`, `corvisquire`, `cosmoem`, `cosmog`, `cottonee`, `crabominable`, `crabrawler`, `cradily`, `cramorant`, `cranidos`, `crawdaunt`, `cresselia`, `croagunk`, `crobat`, `croconaw`, `crustle`, `cryogonal`, `cubchoo`, `cubone`, `cufant`, `cursola`, `cutiefly`, `cyndaquil`, `darkrai`, `darmanitan-standard`, `dartrix`, `darumaka`, `decidueye`, `dedenne`, `deerling-spring`, `deino`, `delcatty`, `delibird`, `delphox`, `deoxys-normal`, `dewgong`, `dewott`, `dewpider`, `dhelmise`, `dialga`, `diancie`, `diggersby`, `diglett`, `ditto`, `dodrio`, `doduo`, `donphan`, `dottler`, `doublade`, `dracovish`, `dracozolt`, `dragalge`, `dragapult`, `dragonair`, `dragonite`, `drakloak`, `drampa`, `drapion`, `dratini`, `drednaw`, `dreepy`, `drifblim`, `drifloon`, `drilbur`, `drizzile`, `drowzee`, `druddigon`, `dubwool`, `ducklett`, `dugtrio`, `dunsparce`, `duosion`, `duraludon`, `durant`, `dusclops`, `dusknoir`, `duskull`, `dustox`, `dwebble`, `eelektrik`, `eelektross`, `eevee`, `eiscue-ice`, `ekans`, `eldegoss`, `electabuzz`, `electivire`, `electrike`, `electrode`, `elekid`, `elgyem`, `emboar`, `emolga`, `empoleon`, `entei`, `escavalier`, `espeon`, `espurr`, `eternatus`, `excadrill`, `exeggcute`, `exeggutor`, `exploud`, `falinks`, `farfetchd`, `fearow`, `feebas`, `fennekin`, `feraligatr`, `ferroseed`, `ferrothorn`, `finneon`, `flaaffy`, `flabebe-red`, `flapple`, `flareon`, `fletchinder`, `fletchling`, `floatzel`, `floette-red`, `florges-red`, `flygon`, `fomantis`, `foongus`, `forretress`, `fraxure`, `frillish`, `froakie`, `frogadier`, `froslass`, `frosmoth`, `furfrou-natural`, `furret`, `gabite`, `gallade`, `galvantula`, `garbodor`, `garchomp`, `gardevoir`, `gastly`, `gastrodon-west`, `genesect`, `gengar`, `geodude`, `gible`, `gigalith`, `girafarig`, `giratina-altered`, `glaceon`, `glalie`, `glameow`, `glastrier`, `gligar`, `gliscor`, `gloom`, `gogoat`, `golbat`, `goldeen`, `golduck`, `golem`, `golett`, `golisopod`, `golurk`, `goodra`, `goomy`, `gorebyss`, `gossifleur`, `gothita`, `gothitelle`, `gothorita`, `gourgeist-average`, `granbull`, `grapploct`, `graveler`, `greedent`, `greninja`, `grimer`, `grimmsnarl`, `grookey`, `grotle`, `groudon`, `grovyle`, `growlithe`, `grubbin`, `grumpig`, `gulpin`, `gumshoos`, `gurdurr`, `guzzlord`, `gyarados`, `hakamo-o`, `happiny`, `hariyama`, `hatenna`, `hatterene`, `hattrem`, `haunter`, `hawlucha`, `haxorus`, `heatmor`, `heatran`, `heliolisk`, `helioptile`, `heracross`, `herdier`, `hippopotas`, `hippowdon`, `hitmonchan`, `hitmonlee`, `hitmontop`, `ho-oh`, `honchkrow`, `honedge`, `hoopa`, `hoothoot`, `hoppip`, `horsea`, `houndoom`, `houndour`, `huntail`, `hydreigon`, `hypno`, `igglybuff`, `illumise`, `impidimp`, `incineroar`, `indeedee-male`, `infernape`, `inkay`, `inteleon`, `ivysaur`, `jangmo-o`, `jellicent`, `jigglypuff`, `jirachi`, `jolteon`, `joltik`, `jumpluff`, `jynx`, `kabuto`, `kabutops`, `kadabra`, `kakuna`, `kangaskhan`, `karrablast`, `kartana`, `kecleon`, `keldeo-ordinary`, `kingdra`, `kingler`, `kirlia`, `klang`, `klefki`, `klink`, `klinklang`, `koffing`, `komala`, `kommo-o`, `krabby`, `kricketot`, `kricketune`, `krokorok`, `krookodile`, `kubfu`, `kyogre`, `kyurem`, `lairon`, `lampent`, `landorus-incarnate`, `lanturn`, `lapras`, `larvesta`, `larvitar`, `latias`, `latios`, `leafeon`, `leavanny`, `ledian`, `ledyba`, `lickilicky`, `lickitung`, `liepard`, `lileep`, `lilligant`, `lillipup`, `linoone`, `litleo`, `litten`, `litwick`, `lombre`, `lopunny`, `lotad`, `loudred`, `lucario`, `ludicolo`, `lugia`, `lumineon`, `lunala`, `lunatone`, `lurantis`, `luvdisc`, `luxio`, `luxray`, `lycanroc-midday`, `machamp`, `machoke`, `machop`, `magby`, `magcargo`, `magearna`, `magikarp`, `magmar`, `magmortar`, `magnemite`, `magneton`, `magnezone`, `makuhita`, `malamar`, `mamoswine`, `manaphy`, `mandibuzz`, `manectric`, `mankey`, `mantine`, `mantyke`, `maractus`, `mareanie`, `mareep`, `marill`, `marowak`, `marshadow`, `marshtomp`, `masquerain`, `mawile`, `medicham`, `meditite`, `meganium`, `melmetal`, `meloetta-aria`, `meltan`, `meowstic-male`, `meowth`, `mesprit`, `metagross`, `metang`, `metapod`, `mew`, `mewtwo`, `mienfoo`, `mienshao`, `mightyena`, `milcery`, `milotic`, `miltank`, `mime-jr`, `mimikyu-disguised`, `minccino`, `minior-red-meteor`, `minun`, `misdreavus`, `mismagius`, `moltres`, `monferno`, `morelull`, `morgrem`, `morpeko-full-belly`, `mothim-plant`, `mr-mime`, `mr-rime`, `mudbray`, `mudkip`, `mudsdale`, `muk`, `munchlax`, `munna`, `murkrow`, `musharna`, `naganadel`, `natu`, `necrozma`, `nickit`, `nidoking`, `nidoqueen`, `nidoran-f`, `nidoran-m`, `nidorina`, `nidorino`, `nihilego`, `nincada`, `ninetales`, `ninjask`, `noctowl`, `noibat`, `noivern`, `nosepass`, `numel`, `nuzleaf`, `obstagoon`, `octillery`, `oddish`, `omanyte`, `omastar`, `onix`, `oranguru`, `orbeetle`, `oricorio-baile`, `oshawott`, `pachirisu`, `palkia`, `palossand`, `palpitoad`, `pancham`, `pangoro`, `panpour`, `pansage`, `pansear`, `paras`, `parasect`, `passimian`, `patrat`, `pawniard`, `pelipper`, `perrserker`, `persian`, `petilil`, `phanpy`, `phantump`, `pheromosa`, `phione`, `pichu`, `pidgeot`, `pidgeotto`, `pidgey`, `pidove`, `pignite`, `pikachu`, `pikipek`, `piloswine`, `pincurchin`, `pineco`, `pinsir`, `piplup`, `plusle`, `poipole`, `politoed`, `poliwag`, `poliwhirl`, `poliwrath`, `polteageist-phony`, `ponyta`, `poochyena`, `popplio`, `porygon-z`, `porygon`, `porygon2`, `primarina`, `primeape`, `prinplup`, `probopass`, `psyduck`, `pumpkaboo-average`, `pupitar`, `purrloin`, `purugly`, `pyroar`, `pyukumuku`, `quagsire`, `quilava`, `quilladin`, `qwilfish`, `raboot`, `raichu`, `raikou`, `ralts`, `rampardos`, `rapidash`, `raticate`, `rattata`, `rayquaza`, `regice`, `regidrago`, `regieleki`, `regigigas`, `regirock`, `registeel`, `relicanth`, `remoraid`, `reshiram`, `reuniclus`, `rhydon`, `rhyhorn`, `rhyperior`, `ribombee`, `rillaboom`, `riolu`, `rockruff`, `roggenrola`, `rolycoly`, `rookidee`, `roselia`, `roserade`, `rotom`, `rowlet`, `rufflet`, `runerigus`, `sableye`, `salamence`, `salandit`, `salazzle`, `samurott`, `sandaconda`, `sandile`, `sandshrew`, `sandslash`, `sandygast`, `sawk`, `sawsbuck-spring`, `scatterbug-icy-snow`, `sceptile`, `scizor`, `scolipede`, `scorbunny`, `scrafty`, `scraggy`, `scyther`, `seadra`, `seaking`, `sealeo`, `seedot`, `seel`, `seismitoad`, `sentret`, `serperior`, `servine`, `seviper`, `sewaddle`, `sharpedo`, `shaymin-land`, `shedinja`, `shelgon`, `shellder`, `shellos-west`, `shelmet`, `shieldon`, `shiftry`, `shiinotic`, `shinx`, `shroomish`, `shuckle`, `shuppet`, `sigilyph`, `silcoon`, `silicobra`, `silvally-normal`, `simipour`, `simisage`, `simisear`, `sinistea-phony`, `sirfetchd`, `sizzlipede`, `skarmory`, `skiddo`, `skiploom`, `skitty`, `skorupi`, `skrelp`, `skuntank`, `skwovet`, `slaking`, `slakoth`, `sliggoo`, `slowbro`, `slowking`, `slowpoke`, `slugma`, `slurpuff`, `smeargle`, `smoochum`, `sneasel`, `snivy`, `snom`, `snorlax`, `snorunt`, `snover`, `snubbull`, `sobble`, `solgaleo`, `solosis`, `solrock`, `spearow`, `spectrier`, `spewpa-icy-snow`, `spheal`, `spinarak`, `spinda`, `spiritomb`, `spoink`, `spritzee`, `squirtle`, `stakataka`, `stantler`, `staraptor`, `staravia`, `starly`, `starmie`, `staryu`, `steelix`, `steenee`, `stonjourner`, `stoutland`, `stufful`, `stunfisk`, `stunky`, `sudowoodo`, `suicune`, `sunflora`, `sunkern`, `surskit`, `swablu`, `swadloon`, `swalot`, `swampert`, `swanna`, `swellow`, `swinub`, `swirlix`, `swoobat`, `sylveon`, `taillow`, `talonflame`, `tangela`, `tangrowth`, `tapu-bulu`, `tapu-fini`, `tapu-koko`, `tapu-lele`, `tauros`, `teddiursa`, `tentacool`, `tentacruel`, `tepig`, `terrakion`, `thievul`, `throh`, `thundurus-incarnate`, `thwackey`, `timburr`, `tirtouga`, `togedemaru`, `togekiss`, `togepi`, `togetic`, `torchic`, `torkoal`, `tornadus-incarnate`, `torracat`, `torterra`, `totodile`, `toucannon`, `toxapex`, `toxel`, `toxicroak`, `toxtricity-amped`, `tranquill`, `trapinch`, `treecko`, `trevenant`, `tropius`, `trubbish`, `trumbeak`, `tsareena`, `turtonator`, `turtwig`, `tympole`, `tynamo`, `type-null`, `typhlosion`, `tyranitar`, `tyrantrum`, `tyrogue`, `tyrunt`, `umbreon`, `unfezant`, `unown-a`, `ursaring`, `urshifu-single-strike`, `uxie`, `vanillish`, `vanillite`, `vanilluxe`, `vaporeon`, `venipede`, `venomoth`, `venonat`, `venusaur`, `vespiquen`, `vibrava`, `victini`, `victreebel`, `vigoroth`, `vikavolt`, `vileplume`, `virizion`, `vivillon-meadow`, `volbeat`, `volcanion`, `volcarona`, `voltorb`, `vullaby`, `vulpix`, `wailmer`, `wailord`, `walrein`, `wartortle`, `watchog`, `weavile`, `weedle`, `weepinbell`, `weezing`, `whimsicott`, `whirlipede`, `whiscash`, `whismur`, `wigglytuff`, `wimpod`, `wingull`, `wishiwashi-solo`, `wobbuffet`, `woobat`, `wooloo`, `wooper`, `wormadam-plant`, `wurmple`, `wynaut`, `xatu`, `xerneas-active`, `xurkitree`, `yamask`, `yamper`, `yanma`, `yanmega`, `yungoos`, `yveltal`, `zacian-hero`, `zamazenta-hero`, `zangoose`, `zapdos`, `zarude`, `zebstrika`, `zekrom`, `zeraora`, `zigzagoon`, `zoroark`, `zorua`, `zubat`, `zweilous`, `zygarde`];

let optionClicked = false;
const allOptions = document.querySelectorAll('.choices');
const correctSound = new Audio('./audio/correct.mp3');
const incorrectSound = new Audio('./audio/incorrect.mp3');
const nextBtn = document.querySelector('#next-btn');
const finishBtn = document.querySelector('#finish-btn');
const username = document.querySelector('#username');
const questionNumber = document.querySelector('.questionNum');
const remTime = document.querySelector('#rem-time');
let currentScore = 0;
let correctAnswertoPokemon;
let questionNum = 1;

let tempStorage =[];
function pokeFinder() {
    const randomIndex = Math.floor(Math.random() * 898);
    if(tempStorage.includes(randomIndex)) {
        return pokeFinder();
    }
    else {
        tempStorage.push(randomIndex);
        return randomIndex;
    }
}

function delayedFunction(startTime) {
    if(optionClicked === false) {
        const elapsedTimeInSeconds = Math.floor((new Date().getTime() - startTime) / 1000);
        const remainingTimeInSeconds = 10 - elapsedTimeInSeconds;
        const remTime = document.querySelector('#rem-time');
        remTime.innerHTML = remainingTimeInSeconds;
        if(remainingTimeInSeconds === 0) {
            let incorrectTrigger = (correctAnswertoPokemon === 4) ? 1 : correctAnswertoPokemon+1;
            allOptions[incorrectTrigger-1].click();
            currentScore += 1;
            const updatedScore = document.querySelector(`.${username.value}-score`);
            updatedScore.textContent = `${currentScore}`;
        }
        if (elapsedTimeInSeconds < 10) {
            setTimeout(() => delayedFunction(startTime), 1000);
        }
    }
}

function rotateTimer(startTime) {
    if(optionClicked === false) {
        const secondSemiCircle = document.querySelector('.second-semi-circle');
        const thirdSemiCircle = document.querySelector('.third-semi-circle');
        const elapsedTimeInSeconds = (new Date().getTime() - startTime) / 1000;
        if (elapsedTimeInSeconds < 5) {
            secondSemiCircle.style.transform = `rotate(${-0.036*elapsedTimeInSeconds*1000}deg)`;
            setTimeout(() => rotateTimer(startTime), 1);
        }
        else if(elapsedTimeInSeconds < 10 && elapsedTimeInSeconds >= 5) {
            thirdSemiCircle.style.transform = `rotate(${(-0.036*elapsedTimeInSeconds*1000) - 180}deg)`;
            thirdSemiCircle.style.zIndex = '1';
            setTimeout(() => rotateTimer(startTime), 1);
        }
    }
}

function optionGenerator(currentPokemonIndex) {
    const correctOption = Math.floor(Math.random() * 4) + 1;
    for(let i=1; i<=4; i++) {
        const option = document.querySelector(`#option-${i} h3`);
        if(i === correctOption) {
            option.innerHTML = pokemonNames[currentPokemonIndex];
        }
        else {
            option.innerHTML = pokemonNames[pokeFinder()];
        }
    }
    return correctOption;
}

const startBtn = document.querySelector('#start-btn');
startBtn.addEventListener('click', ()=> {
    const scoreTable = document.querySelector('#score-table');
    const newRow = document.createElement('tr');
    const newNameCell = document.createElement('td');
    const newScoreCell = document.createElement('td');

    newNameCell.textContent = username.value;
    newScoreCell.textContent = '0';
    newRow.classList.add(`${username.value}-row`);
    newNameCell.classList.add(`${username.value}-name`);
    newScoreCell.classList.add(`${username.value}-score`);
    newRow.appendChild(newNameCell);
    newRow.appendChild(newScoreCell);
    scoreTable.appendChild(newRow);

    let currentPokemonIndex = pokeFinder();
    const pokemonImg = document.querySelector('#pokemon-img').src = './images/Pokemon Dataset/' + pokemonNames[currentPokemonIndex] + '.png';
    let correctOption = optionGenerator(currentPokemonIndex);
    correctAnswertoPokemon = correctOption;
    const startTime = new Date().getTime();
    setTimeout(() => rotateTimer(startTime), 1);
    setTimeout(() => delayedFunction(startTime), 1000);
});

const optionsParentDiv = document.querySelector('.options');
optionsParentDiv.addEventListener('click', (e)=> {
    nextBtn.style.visibility = "visible";
    finishBtn.style.visibility = "visible";

    if(e.target.closest('.choices')) {
        optionClicked = true;
        allOptions.forEach((option, index) => {
            const h2Element = option.querySelector('h2');
            const h3Element = option.querySelector('h3');
            if(index+1 === correctAnswertoPokemon) {
                option.classList.add('correct-option');
                option.style.border = '1px solid #1bcb00';
                h2Element.style.border = '1px solid #1bcb00';
                h2Element.style.color = '#1bcb00';
                h3Element.style.color = '#1bcb00';
            }
            else {
                option.classList.remove('correct-option');
                option.style.border = '1px solid #c60303';
                h2Element.style.border = '1px solid #c60303';
                h2Element.style.color = '#c60303';
                h3Element.style.color = '#c60303';
            }
        });
        const clickedChoice = e.target.closest('.choices');
        if(clickedChoice.classList.contains('correct-option')) {
            correctSound.play();
            currentScore += 4;
            const updatedScore = document.querySelector(`.${username.value}-score`);
            updatedScore.textContent = `${currentScore}`;
        }
        else {
            incorrectSound.play();
            currentScore -= 1;
            const updatedScore = document.querySelector(`.${username.value}-score`);
            updatedScore.textContent = `${currentScore}`;
        }
    }
});

nextBtn.addEventListener('click', ()=> {
    nextBtn.style.visibility = "hidden";
    finishBtn.style.visibility = "hidden";
    optionClicked = false;
    const secondSemiCircle = document.querySelector('.second-semi-circle');
    const thirdSemiCircle = document.querySelector('.third-semi-circle');
    secondSemiCircle.style.transform = `rotate(0deg)`;
    thirdSemiCircle.style.transform = `rotate(0deg)`;
    thirdSemiCircle.style.zIndex = '3';
    remTime.innerHTML = '10';
    allOptions.forEach((option, index) => {
        const h2Element = option.querySelector('h2');
        const h3Element = option.querySelector('h3');
        option.style.border = '1px solid #1603c6';
        h2Element.style.border = '1px solid #1603c6';
        h2Element.style.color = '#1603c6';
        h3Element.style.color = '#1603c6';
    });
    const newPokemon = pokeFinder();
    const pokemonImg = document.querySelector('#pokemon-img').src = './images/Pokemon Dataset/' + pokemonNames[newPokemon] + '.png';
    let correctOption = optionGenerator(newPokemon);
    correctAnswertoPokemon = correctOption;
    const startTime = new Date().getTime();

    questionNum += 1;
    questionNumber.textContent = `${questionNum}.`;

    setTimeout(() => rotateTimer(startTime), 1);
    setTimeout(() => delayedFunction(startTime), 1000);
});

const gameDiv = document.querySelector('.game');
const rulesDiv = document.querySelector('.rules');
const scoreTable = document.querySelector('.score');

startBtn.addEventListener('click', () => {
        gameDiv.classList.add('active');
        rulesDiv.classList.remove('active');
});

remTime.style.display = 'none';

finishBtn.addEventListener('click', () => {
    
    // gameDiv.classList.remove('active');
    // scoreTable.classList.add('active');
    questionNumber.textContent = '1.';

    swal({
        title: "Game Over",
        text: `Your score is ${currentScore}`,
        icon: "success",
        button: "OK!",
    }).then(() => {
        window.location.href = "/"; // Replace "https://example.com" with the URL of the webpage you want to redirect to
    });

    const scoreRow = document.querySelector(`.${username.value}-row`);
    const scoreCell = scoreRow.querySelector(`.${username.value}-score`);
    scoreCell.textContent = `${currentScore}`;
    const updatedScore = document.querySelector(`.${username.value}-score`);
    updatedScore.textContent = `${currentScore}`;
    tempStorage = [];
    questionNum = 1;
    postData();
});


async function postData() {
    try {
      // Ensure that username and currentScore are defined
      if (!username || !currentScore) {
        console.error('Error: username and currentScore are required.');
        return;
      }

      const response = await fetch('http://localhost:3000/api/storeData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerName:username.value, score:currentScore }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  