<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Nutrilicious</title>
	<script type="text/javascript">
	window.CSRF_TOKEN = '{{ csrf_token() }}';
	</script>
	<script src="https://cdn.tailwindcss.com"></script>
	
	@viteReactRefresh
	@vite(['resources/js/app.js'])
</head>

<body>
	<div id="root"></div>

</body>

</html>