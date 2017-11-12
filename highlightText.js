var StringArray = ["noob","dummy","Dummy","dope","derp",];

StringArray.forEach(function(v){
  var td = $('p:contains(\''+v+'\')');
  // :contains(noob)
  // :contains('noob')
  console.log(td);
  if(td.length > 0){
    var span = td.html().replace(new RegExp(v,'g'),'<span class="highlight-string">'+v+'</span>');
    var n = td.html(span);
  }
});
