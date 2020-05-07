export const NBars={regex:/{{([^}]+)}}/g,transform:function(a,b){return a.replace(this.regex,(a,c)=>b[c])},compile:function(a){return b=>this.transform(a,b)}};export default NBars;
