var Select2Demo = Select2Demo || {};

Select2Demo.Users = function(options) {
  var postUsers = options.getUsers;

  this.init = function() {
    bindSelect2();
  }

  var bindSelect2 = function() {
    var select2Options = {
      ajax: {
        transport: function(params, success, failure) {
          $.ajax({
            dataType: 'json',
            url: postUsers,
            type: 'POST',
            data: function(params) {
              return {q: params.term}
            },
            success: success
          });
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
