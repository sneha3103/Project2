// alert("hi");

// app.post('/logout', (req, res) => {
//     req.session.destroy();
//     res.redirect('/');
//   });

//   $('input[name="dates"]').daterangepicker();

//   $(function() {
//     $('input[name="daterange"]').daterangepicker({
//       opens: 'left'
//     }, function(start, end, label) {
//       console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//     });
//   });

  $(function () {
    $('input[name="daterange"]').daterangepicker({
      "showWeekNumbers": true,
    });
  });
  
  $('#duration').on('apply.daterangepicker', function (ev, picker) {
    alert('apply clicked!');
  });
  