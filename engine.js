(function(root){
class RecallSession{
 constructor(ids,saved){this.ids=[...ids];this.queue=[...ids];this.mastered=[];this.wrong=[];this.streak=0;this.best=0;this.attempts=0;if(saved&&Array.isArray(saved.queue)&&Array.isArray(saved.mastered)&&Array.isArray(saved.wrong)&&[...saved.queue,...saved.mastered].length===ids.length&&new Set([...saved.queue,...saved.mastered]).size===ids.length&&[...saved.queue,...saved.mastered].every(x=>ids.includes(x))&&saved.wrong.every(x=>saved.queue.includes(x))){Object.assign(this,saved);this.ids=[...ids]}}
 answer(correct){if(!this.queue.length)return;const id=this.queue.shift();this.attempts++;if(correct){this.mastered.push(id);this.wrong=this.wrong.filter(x=>x!==id);this.streak++;this.best=Math.max(this.best,this.streak)}else{this.streak=0;if(!this.wrong.includes(id))this.wrong.push(id);this.queue.splice(Math.min(3,this.queue.length),0,id)}return id}
}
root.RecallSession=RecallSession;if(typeof module!=='undefined')module.exports=RecallSession;
})(typeof window!=='undefined'?window:globalThis);
