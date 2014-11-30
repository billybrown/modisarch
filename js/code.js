<? 
	if($_GET["id"]) $product_ids=product::getByProductTypeId($_GET["id"]);
	else $product_ids=product::getAll();
	$product_type=new product_type($_GET["id"]);
 ?>
		
		<? $width_total = 0; ?>
		
<? foreach($product_ids as $key=>$product_id): ?>
	<? $product=new product($product_id); ?>
	<? $file_ids=file::getByProductId($product->id,1); ?>
	<? $file=new file($file_ids[0]); ?>
	<? $src = $file->render(440); ?>
	<? $parts = split(".com/",$src); ?>
	<? list($ow, $oh) = getimagesize($parts[1]); ?>
	<? $width_total += $ow; ?>
	<? $img_srcs[$key] = $src; ?>
<? endforeach; ?>
		<? $width_total += 800 ?>


<div id="content" style="width: <?= $width_total; ?>px;">
	
	<div id="column1">
		<a href="index.php?section=home"><img src="nameJessie.gif" height="100" width="250"></a>
		<p class="bio"><?= variable::get("intro"); ?></p>
		
				<?
			$product_ids = product::getAll();
			$product_type_ids = product_type::getAll();
		?>
				<? foreach($product_type_ids as $product_type_id): ?>
				<? $p=new product_type($product_type_id); ?>

					<a href="<?= HOME_URL ?>index.php?section=<?=$p->name ?>">
						<h2><?= $p->name ?></h2>
					</a>
				<? endforeach; ?>
		<a href="index.php?section=contact"><h2>Contact</h2></a>
	</div>
	
	<div id="column2" style="width: <?= $width_total - 380 ?>px;"  />

		<div style="width: <?= $width_total - 380 ?>px;">
			<? foreach($product_ids as $key=> $product_id): ?>
				<img class="art" src="<?= $img_srcs[$key] ?>" />
			<? endforeach; ?>
		</div>

	</div>

</div>
