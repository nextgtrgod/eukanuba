const baseUrl = 'http://100letbd.afisha.ru'

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
			return `https://twitter.com/intent/tweet?url=${baseUrl}${this.route}&text=%D0%9E%D0%B1%D0%B5%D0%B4+%D0%B4%D0%BB%D0%B8%D0%BD%D0%BE%D0%B9+%D0%B2+100+%D0%BB%D0%B5%D1%82`
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
		}
	}
}
