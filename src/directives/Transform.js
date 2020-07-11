// Para tornar a diretiva global:
// import Vue from 'vue';
// Vue.directive('meu-transform', {

export default {

  bind(el, binding) {

    let current = 0;
    el.addEventListener('dblclick', () => {
      let increment = binding.value || 90;
      let effect = `rotate(${current}deg)`;

      if(!binding.arg || binding.arg == 'rotate') {
        
        if(binding.modifiers.reverse) {
          current-=increment;
        } else {
          current+=increment;
        }
        effect = `rotate(${current}deg)`;

      } else if(binding.arg == 'scale') {

        effect = `scale(${increment})`;
      }

      el.style.transform = effect;

      if(binding.modifiers.animate) el.style.transition = "transform 0.5s";

    })

  }
}

// }) 
  