
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

export const tiger = async (options = {}) => {

  // 레스트 파라미터
  const {url, ...restOptions} = {
    ...defaultOptions, 
    ...options,
    headers: {...defaultOptions.headers, ...options.headers} // 깊은 복사를 위해 작성함
  }

  let response = await fetch(url, restOptions)

  if(response.ok){
    response.data = await response.json();
  }

  return response;
}

tiger.get = (url, options) => {
  tiger({
    url,
    ...options
  })
}

tiger.post = (url, body, options) => {
  tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.put = (url, body, options) => {
  tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url, options) => {
  tiger({
    method: 'DELETE',
    url,
    ...options
  })
}


tiger.post('www.naver.com', {name:'tiger'}, {mode:'cors', headers:{}})