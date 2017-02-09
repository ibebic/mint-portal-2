import moment from 'moment'

const searchResults = [
  { score: 678, name: 'filezilla', link: 'https://community.linuxmint.com/software/view/filezilla', description: 'Full-featured graphical ftp/ftps/sftp client' },
  { score: 21, name: 'file-roller', link: 'https://community.linuxmint.com/software/view/file-roller', description: 'Archive manager for gnome' },
  { score: 12, name: 'filelight', link: 'https://community.linuxmint.com/software/view/filelight', description: 'Show where your diskspace is being used' },
  { score: 8, name: '	dphys-swapfile', link: 'https://community.linuxmint.com/software/view/dphys-swapfile', description: 'Autogenerate and use a swap file' }
];


export default {
  name: 'app',
  data() {
    return {
      footer: 'Generic footer message',
      items: []
    }
  },
  methods: {
    populate: function () {
      this.items = searchResults;
    }
  }
}