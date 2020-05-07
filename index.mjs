export const NBars = {
  regex: new RegExp('{{([^}]+)}}', 'g'),
  transform: function(template, objs) {
    return template.replace(this.regex,(match, prop) =>{
        return objs[prop];
    });
  },
  compile: function(template) {
    return (objs)=>{
      return this.transform(template, objs);
    }
  },
}
export default NBars;
