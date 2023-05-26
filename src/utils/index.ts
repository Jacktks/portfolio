export const onScrollTo = (id: String, cb?: Function) => {
  const offsetTopCurrentElm = document.getElementById(`${id}`)?.offsetTop || 0;

  console.log('running');
  window.scrollTo({
    top: offsetTopCurrentElm - 78,
    behavior: 'smooth',
  });
};
