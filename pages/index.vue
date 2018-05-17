<template>
  <div ref="pdfdisplay" class="pdfcanvas"></div>
</template>

<script>

export default {
  mounted() {
    PSPDFKit.load({
      container: this.$refs.pdfdisplay,
      licenseKey: 'yEoU7X0o8vMofSUpW0ugHHpV10B2hMEjHa0AcNz-7dLfjg34s47ICPcNwObfaP8xPBxmGdtMN351lxwVhFq9TaG1EnETITq0e3obxVWkWppBE2iBgb4A-Jn4dno-Qo4taFZXYGsf6gYrA9A51RJ1QcRDdI7E7ZocU-UMa0ydhwHcfMLPvpFGlgT2JVIhsxmtJ_FW-LrAtIU2jqo9qKVp-IaN_jwOD809ZSlS-MgoNzdHayGIsfcgTDkAdI-shypdS5xFBSGxASOZWi95ntxjEPRJO6tbEeSvYHt1pC_jSjn_uTVpBMq-i6SyIFzJTZGMLiA4bzgcDsH2kX8mCt1vyHrdqniwSVHfGYbw7Zq6YHzqgnLG98YSDNrpH8lKvBCvyL9aw6kgrVpgMU0m1GhyJLtzEwOLKi-t12vLjsmENLMrn8HK7ZSOlGH1xkvt8fuZ',
      pdf: 'https://cdn.mozilla.net/pdfjs/tracemonkey.pdf'
    })
      .then(instance => {
        console.log('PSPDFKIT OK..', instance)
      })
      .catch(error => {
        console.log('PSPDFKIT ERROR..', error)
        throw new Error(error)
      })
  }
}
</script>

<style>
  .pdfcanvas {
    height: 100vh;
    width: 100vw;
  }
</style>
