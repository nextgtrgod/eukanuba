const baseUrl = 'https://coach.afisha.ru'

export default {
	computed: {
		route() {
			if (this.$route.path === '/') return ''
			return this.$route.path
		},
		shareVk() {
			return `https://vk.com/share.php?url=${baseUrl}${this.route}`
		},
		shareFb() {
			return `https://www.facebook.com/dialog/share?app_id=1458967624164016&display=popup&href=${baseUrl}${this.route}`
		},
		shareOk() {
			return `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=${baseUrl}${this.route}`
		},
		shareTw() {
			return `https://twitter.com/intent/tweet?url=${baseUrl}${this.route}&text=Как%20превратить%20прогулку%20с%20собакой%20в%20увлекательную%20тренеровку`
		},
		shareTg() {
			return `https://t.me/share/url?url=${baseUrl}${this.route}`
		},
		sharePin() {
			return `http://pinterest.com/pin/create/link/?url=${baseUrl}${this.route}`
		}
	},
	methods: {
		shareClick(soc) {
			ga('send', 'event', 'share', this.$route.name, soc)
		},

		linkClick: url => ga('send', 'event', 'link', url),
	}
}
