(function () {
  'use strict';

  function DashboardCtrl(NodeService) {

    this.tasks = NodeService.json;

    const cy = cytoscape({
      container: document.getElementById('cy'),
      elements: [
        {
          data: { id: 'a' }
        },
        {
          data: { id: 'b' }
        },
        {
          data: { id: 'c' }
        },
        {
          data: { id: 'ab', source: 'a', target: 'b' },
        },
        {
          data: { id: 'ba', source: 'b', target: 'a' }
        }
      ],

      style: cytoscape.stylesheet()
        .selector('node')
        .css({
          'content': 'data(id)',
          'text-valign': 'center',
          'color': 'white',
          'text-outline-width': 1,
          'background-color': '#999',
          'text-outline-color': '#999'
        })
        .selector('edge')
        .css({
          'curve-style': 'bezier',
          'target-arrow-shape': 'triangle',
          'target-arrow-color': '#ccc',
          'line-color': '#ccc',
          'width': 1
        })
        .selector(':selected')
        .css({
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black'
        })
        .selector('.faded')
        .css({
          'opacity': 0.25,
          'text-opacity': 0
        }),

      layout: {
        name: 'grid',
        padding: 10
      }
    });
    cy.zoom({
      level: 0.7, // the zoom level
      position: { x: 600, y: 400 }
    });
    cy.zoomingEnabled(false);
    this.addNode = function () {
      const n1 = Math.random().toString(36).substring(3, 8);
      const n0 = Math.random().toString(36).substring(3, 8);
      cy.add([
        {
          group: "nodes",
          data: {
            id: n1
          },
          position: {
            x: NodeService.getRandomizedX(),
            y: NodeService.getRandomizedY()
          }
        },
        {
          group: "nodes",
          data: {
            id: n0
          },
          position: {
            x: NodeService.getRandomizedX(),
            y: NodeService.getRandomizedY()
          }
        },
        {
          group: "edges", data: { id: `${n1}.${n0}`, source: n0, target: 'b' }
        }
      ]);

    };
  }

  angular
    .module('circles')
    .controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['NodeService'];

}());