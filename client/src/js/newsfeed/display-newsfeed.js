import apiKey from '../secrets/apiKey';

export default async function displayNewsfeed () {
  document.getElementById ('place').innerHTML = await getMarkup ();
  // addListeners();
}

async function getMarkup () {

  const urlParams = new URLSearchParams (window.location.search);

  if (urlParams.has('tag')) {
    getCreateNewsTopicFeed(urlParams);
  } else {
    getCreateNewsStory(urlParams);
  }

  const feed = await getFeed (params);
  console.log('feed:', feed);

  return `<div class="newsfeed">
    ${appendHeader ()}
    ${getFeedMarkup(feed)}
	</div>`;
}

function appendHeader () {
  return `<div class="space">
        <h1>THE NEWSFEED</h1>
        <h4>Feed it to me</h4>
    </div>`;
}

async function getFeed () {
  let url;

  url = `https://api-ropsten.etherscan.io/api?module=logs&action=getLogs&fromBlock=0&toBlock=latest&address=${window.dapp.contracts.NewsRoom.address}&topic0=${getTopic0 (urlParams)}&topic1=${getTopic1 (urlParams)}&topic2=${getTopic2 (urlParams)}&apikey=${apiKey}`;
  
  const response = await fetch (url).then (data => {
    return data.json ();
  });

  return response.result;
}

function getTopic0 (urlParams) {
  if (urlParams.has('tag')) {
    return window.dapp.contracts.NewsRoom.contract.interface.events.OnCreateNewsTopic.topic;
  }

  return window.dapp.contracts.NewsRoom.contract.interface.events.OnCreateNewsStory.topic;
}

function getTopic1 (urlParams) {
  return '';
}

function getTopic2 (urlParams) {
  return '';
}

function getFeedMarkup() {
  const {  } dapp.contracts.NewsRoom.contract.interface.events.OnCreateNewsStory.decode(temp1[0].data);
}


function addListeners () {
  // if (document.getElementById('create_news_team')) {
  //     document.getElementById('create_news_team').addEventListener('click', createNewsTeam);
  // }
  // if (document.getElementById('create_news_story')) {
  //     document.getElementById('create_news_story').addEventListener('click', createNewsStory);
  // }
}
