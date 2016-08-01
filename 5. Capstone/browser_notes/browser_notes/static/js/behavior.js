 $('.ui.button').on('click', function() {
        var note = $('#current-note').html();
        $.post({
            url: '//localhost:8000/notes/',
            data: {
                csrfmiddlewaretoken: $('[name=csrfmiddlewaretoken]').val(),
                note: note
            },
            success: function (data) {
                $('#notes-list').html(data);
            }
        });
    });