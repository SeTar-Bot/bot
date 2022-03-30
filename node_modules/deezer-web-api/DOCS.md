## Classes

<dl>
<dt><a href="#Deezer">Deezer</a></dt>
<dd><p>API Instance</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getChart">getChart()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getChartTracks">getChartTracks()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getChartAlbums">getChartAlbums()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getChartArtists">getChartArtists()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getChartPlaylists">getChartPlaylists()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getChartPodcasts">getChartPodcasts()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getComment">getComment(comment_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getEditorials">getEditorials()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getEpisode">getEpisode()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getEpisodeBookmark">getEpisodeBookmark()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getGenres">getGenres()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getInfos">getInfos()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getOptions">getOptions()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#search">search(type, query)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getAlbum">getAlbum(album_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getAlbumComments">getAlbumComments(album_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getAlbumFans">getAlbumFans(album_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getAlbumTracks">getAlbumTracks(album_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getPlaylist">getPlaylist(playlist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getPlaylistComments">getPlaylistComments(playlist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getPlaylistFans">getPlaylistFans(playlist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getPlaylistTracks">getPlaylistTracks(playlist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getPodcast">getPodcast(podcast_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getPodcastEpisodes">getPodcastEpisodes(podcast_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getRadios">getRadios()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getRadioGenres">getRadioGenres()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getTopRadios">getTopRadios()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getRadioLists">getRadioLists()</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getTrack">getTrack(track_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getArtist">getArtist(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getArtistTopTracks">getArtistTopTracks(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getArtistAlbums">getArtistAlbums(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getArtistComments">getArtistComments(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getArtistFans">getArtistFans(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getRelatedArtists">getRelatedArtists(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getArtistRadio">getArtistRadio(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
<dt><a href="#getArtistPlaylists">getArtistPlaylists(artist_id)</a> ⇒ <code>promise</code></dt>
<dd></dd>
</dl>

<a name="Deezer"></a>

## Deezer
API Instance

**Kind**: global class  
<a name="getChart"></a>

## getChart() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getChart()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getChartTracks"></a>

## getChartTracks() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getChartTracks()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getChartAlbums"></a>

## getChartAlbums() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart albums)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getChartAlbums()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getChartArtists"></a>

## getChartArtists() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart artists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getChartArtists()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getChartPlaylists"></a>

## getChartPlaylists() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart playlists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getChartPlaylists()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getChartPodcasts"></a>

## getChartPodcasts() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get chart podcasts)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getChartPodcasts()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getComment"></a>

## getComment(comment_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| comment_id | <code>string</code> | ID of comment to get info |

**Example** *(Get comment info)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getComment("123123")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getEditorials"></a>

## getEditorials() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get editorials)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getEditorials()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getEpisode"></a>

## getEpisode() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get episode)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getEpisode()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getEpisodeBookmark"></a>

## getEpisodeBookmark() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get episode bookmark)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getEpisodeBookmark()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getGenres"></a>

## getGenres() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get genres)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getGenres()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getInfos"></a>

## getInfos() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get infos)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getInfos()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getOptions"></a>

## getOptions() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get options)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.getOptions()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="search"></a>

## search(type, query) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | Type of request allowed types (album, artist, history, playlist, podcast, radio, track, user), if null will search for all types |
| query | <code>string</code> | Your search |

**Example** *(Search things)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.search("album", "Blurryface")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();

// Or try this

var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.infos.search("Blurryface")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getAlbum"></a>

## getAlbum(album_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get info |

**Example** *(Get information from an album)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getAlbum("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getAlbumComments"></a>

## getAlbumComments(album_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get comments |

**Example** *(Get album comments)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getAlbumComments("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getAlbumFans"></a>

## getAlbumFans(album_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get fans |

**Example** *(Get album fans)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getAlbumFans("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getAlbumTracks"></a>

## getAlbumTracks(album_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| album_id | <code>string</code> | ID of album to get tracks |

**Example** *(Get album tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getAlbumTracks("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getPlaylist"></a>

## getPlaylist(playlist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get info |

**Example** *(Get playlist)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getPlaylist("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getPlaylistComments"></a>

## getPlaylistComments(playlist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get comments |

**Example** *(Get playlist comments)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getPlaylistComments("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getPlaylistFans"></a>

## getPlaylistFans(playlist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get fans |

**Example** *(Get playlist fans)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getPlaylistFans("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getPlaylistTracks"></a>

## getPlaylistTracks(playlist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| playlist_id | <code>string</code> | ID of playlist to get tracks |

**Example** *(Get playlist tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getPlaylistTracks("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getPodcast"></a>

## getPodcast(podcast_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| podcast_id | <code>string</code> | ID of podcast to get info |

**Example** *(Get podcast)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getPodcast("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getPodcastEpisodes"></a>

## getPodcastEpisodes(podcast_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| podcast_id | <code>string</code> | ID of podcast to get episodes |

**Example** *(Get podcast episodes)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getPodcastEpisodes("4721934964")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getRadios"></a>

## getRadios() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get radios)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getRadios()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getRadioGenres"></a>

## getRadioGenres() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get radio genres)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getRadiosGenres()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getTopRadios"></a>

## getTopRadios() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get top radios)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getTopRadios()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getRadioLists"></a>

## getRadioLists() ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  
**Example** *(Get radio lists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getRadiosLists()
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getTrack"></a>

## getTrack(track_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| track_id | <code>string</code> | ID of track to get info |

**Example** *(Get track info)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.musics.getTrack("74606742")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getArtist"></a>

## getArtist(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get info |

**Example** *(Get artist info)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getArtist("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getArtistTopTracks"></a>

## getArtistTopTracks(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get top tracks |

**Example** *(Get artist top tracks)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getArtistTopTracks("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getArtistAlbums"></a>

## getArtistAlbums(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get albums |

**Example** *(Get artist albums)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getArtistAlbums("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getArtistComments"></a>

## getArtistComments(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get comments |

**Example** *(Get artist comments)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getArtistComments("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getArtistFans"></a>

## getArtistFans(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get fans |

**Example** *(Get artist fans)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getArtistFans("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getRelatedArtists"></a>

## getRelatedArtists(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get related artists |

**Example** *(Get related artists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getRelatedArtists("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getArtistRadio"></a>

## getArtistRadio(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get radio |

**Example** *(Get artist radio)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getArtistRadio("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
<a name="getArtistPlaylists"></a>

## getArtistPlaylists(artist_id) ⇒ <code>promise</code>
**Kind**: global function  
**Returns**: <code>promise</code> - Returns a promise with the request  

| Param | Type | Description |
| --- | --- | --- |
| artist_id | <code>string</code> | ID of artist to get playlists |

**Example** *(Get artist playlists)*  
```js
var Deezer = require("deezer-web-api");

var DeezerClient = new Deezer();

async function example() {
   var res = await DeezerClient.users.getArtistPlaylists("1423549")
       .then((res) => {
           console.log(res);
       })
       .catch((err) => {
           console.log(err);
       });
}
example();
```
