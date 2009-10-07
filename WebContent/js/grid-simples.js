Ext.onReady(function(){

	//array contendo os dados que serão exibidos no grid
    var myData = [
        ['Maria','11-12345678','maria@provedor.com','01/02/1984'], 
		['Pedro','12-55698745','pedro@provedor.com','12/04/1983'], 
		['João','21-78542359','joao@provedor.com','23/05/1986'],
		['Tiago','27-25854567','tiago@provedor.com','07/01/1982'],
		['Carla','33-31595187','carla@provedor.com','30/10/1984'], 
		['Estela','21-98652938','estela@provedor.com','29/06/1985'], 
		['Lucas','71-87241548','lucas@provedor.com','25/11/1984'], 
		['Mariana','85-33984526','mariana@provedor.com','02/12/1983'] 
    ];

    //data store que lê os dados e possui sua descrição - fields
    var store = new Ext.data.SimpleStore({
        fields: [
           'nome',
           'telefone',
           'email',
           {name: 'aniversario', type: 'date', dateFormat: 'd/m/Y'}           
        ]
    });

    //lê os dados
    store.loadData(myData);

    // cria o grid
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {header: "NOME", width: 170, sortable: true, dataIndex: 'nome'},
            {header: "TELEFONE", width: 150, sortable: true, dataIndex: 'telefone'},
            {header: "EMAIL", width: 150, sortable: true, dataIndex: 'email'},
            {header: "DATA NASC.", width: 100, sortable: true, dataIndex: 'aniversario',
            	renderer: Ext.util.Format.dateRenderer('d/m/Y')}
        ],
        title: 'Grid Simples Extjs',
        height:230,
        width:590,
		renderTo: document.body,
		frame:true
    });

    //div do grid
    grid.render('grid-simples');
});