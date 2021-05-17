//Qky 2021


window.onload = async function(){
  Vue.component('items-project',{
    props:["title","description","path","detail"],
    template:`
    <div class="the-proj" v-on:click="goTo()">
      <h1>{{title}}</h1>
      <div class="info">
        <div v-if="detail.isFavorite" class="y">⭐ Qky's Favorite :D</div>
        <div v-if="detail.isDone" class="g">✅ Finished</div>
        <div v-if="detail.isMessy" class="y">📄❔ The Code is Messy</div>
        <div v-if="detail.isIndonesian" class="r">🇮🇩 Indonesia Language only?</div>
        <div v-if="detail.isBad" class="r">💥 Its Bad!</div>
    </div>
      <p>{{description}}</p>
    </div>
    `,
    methods:{
      goTo(){
        window.open(this.path, '_blank');
      }
    }
  });

  var alertPopup = new Vue({
    el:"#alertThing",
    data:{
      first: false,
      popups: popups
    }
  });
  
  Vue.component('alert',{
    props:["title","description","buttontext"],
    template:`
		<div class="alerta">
			<div class="popup">
				<p><b>{{title}}</b> {{description}}</p>
				<button v-on:click="removeThis()">{{buttontext||'Close'}}</button>
			</div>
		</div>
    `,
    methods:{
      removeThis(){
        alertPopup.popups.pop()
      }
    }
  })

  var main = new Vue({
    el: '.main',
    data:{
      projects, socialMedia,
      years: new Date().getFullYear() - 2018,
      today: new Date()
    },
    methods:{
      clickToPop(a,b,c){
        popups.push({title:b,description:a,button:c})
      }
    }
  });

};