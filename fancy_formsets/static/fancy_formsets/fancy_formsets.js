$(function() {
	$('a.fancy-formsets-add-row').click(function() {
		var formset_prefix = $(this).data('formset_prefix');
		var total_forms_input = $('#id_'+formset_prefix+'-TOTAL_FORMS');
		var total_form = parseInt(total_forms_input.val());
		var empty_form = eval(formset_prefix+'_empty_form').replace(/__prefix__/g, total_form);
		var tr = $(this).parents('table').find('tr:last');
		tr.after(empty_form);
		total_form += 1;
		total_forms_input.val(total_form);
		return false;
	});
	
	$('span.fancy-formsets-delete a').on('click', function() {
		$(this).parents("span.fancy-formsets-delete").find("input")
			.prop('checked', true);
		$(this).parents("tr").addClass("hidden");
		return false;
	});
});
