var Select2Demo = Select2Demo || {};

Select2Demo.Users = function(options) {
  var getUsers = options.getUsers;

  this.init = function() {
    bindSelect2();
  }

  var bindSelect2 = function() {
    var select2Options = {
      ajax: {
        dataType: 'json',
        url: getUsers,
        data: function(params) {
          return {q: params.term}
        },
        processResults: function(data, params) {
          return {
            results: data.results,
          };
        },
      },
      allowClear: true,
      placeholder: $(this).data('placeholder'),
      width: '100%'
    };

    $('[data-target=select2]').select2(select2Options);
  };
};
