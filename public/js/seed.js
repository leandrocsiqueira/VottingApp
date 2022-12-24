window.Seed = (function () {
  function gerarContagemVotos() {
    return Math.floor(Math.random() * 50 + 15);
  }

  const produtos = [
    {
      id: 1,
      titulo: 'incididunt ut labore',
      descricao: 'Cras semper auctor neque vitae tempus quam pellentesque.',
      url: '#',
      votos: gerarContagemVotos(),
      avatarRemetenteUrl: 'images/avatars/daniel.jpg',
      produtoImagemUrl: 'images/products/image-aqua.png',
    },
    {
      id: 2,
      titulo: 'Magna sit amet purus gravida quis blandit turpis cursus in',
      descricao: 'Elit sed vulputate mi sit.',
      url: '#',
      votos: gerarContagemVotos(),
      avatarRemetenteUrl: 'images/avatars/kristy.png',
      produtoImagemUrl: 'images/products/image-rose.png',
    },
    {
      id: 3,
      titulo: 'Netus et malesuada fames ac turpis egestas integer eget.',
      descricao: 'Condimentum lacinia quis vel eros donec ac odio tempor.',
      url: '#',
      votos: gerarContagemVotos(),
      avatarRemetenteUrl: 'images/avatars/veronika.jpg',
      produtoImagemUrl: 'images/products/image-steel.png',
    },
    {
      id: 4,
      titulo: 'Ultricies mi quis hendrerit dolor. ',
      descricao: 'Volutpat lacus laoreet non curabitur.',
      url: '#',
      votos: gerarContagemVotos(),
      avatarRemetenteUrl: 'images/avatars/molly.png',
      produtoImagemUrl: 'images/products/image-yellow.png',
    },
  ];

  return { produtos: produtos };
})();
