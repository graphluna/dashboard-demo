export function formdata(form) {
  let formdata = new FormData(form)
  return {
    name: formdata.get('name'),
    position: formdata.get('position'),
    age: formdata.get('age'),
  }
}