// Source: https://github.com/emiliorizzo/vue-d3-network
<template>
  <div id="network" class="rounded border-2 h-auto p-2 bg-pink-100">
    <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" />
  </div>
</template>
 
<script>
import D3Network from 'vue-d3-network'
 
export default {
  components: {D3Network},
  props: ['graph', 'highlightedEdges'],
  data () {
    return {
      nodeSize: 20,
      canvas: false,
      nodes: [],
      links: []
    }
  },
  computed:{
    options() {
      return {
        force: 1500,
        size: { w: 600, h: 400},
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels: true,
        canvas: this.canvas,
        linkWidth: 2,
        fontSize: 15,
      }
    }
  },
  watch: {
    graph: function(to) {
      this.nodes = to.nodeList.map((node) => ({
        id: node, 
        name: `[${node + 1}]`, 
      }))
      this.links = to.edges.map((edge) => ({
        sid: edge.start, 
        tid: edge.end, 
        name: edge.weight,
      }))
    },
    highlightedEdges: function() {
      this.links = this.graph.edges.map((edge) => ({
        sid: edge.start, 
        tid: edge.end, 
        name: edge.weight,
        _color: (this.highlightedEdges.includes(edge.id) ? 'red' : 'gray')
      }))
    }
  }
}
</script>
 
<style src="vue-d3-network/dist/vue-d3-network.css">

#network {
  background-color: #C5CBE3 !important;
}

.node-label {
  color: black;
}
</style>