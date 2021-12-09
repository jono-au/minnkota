<?php





add_action('after_setup_theme', 'uncode_language_setup');

function uncode_language_setup(){
	load_child_theme_textdomain('uncode', get_stylesheet_directory() . '/languages');
}



add_filter( 'body_class','my_body_classes' ); function my_body_classes( $classes ) {

	$classes[] = 'loading';
	
	return $classes;
	}


function theme_enqueue_styles(){
	$production_mode = ot_get_option('_uncode_production');
	$resources_version = ($production_mode === 'on') ? null : rand();
	if ( function_exists('get_rocket_option') && ( get_rocket_option( 'remove_query_strings' ) || get_rocket_option( 'minify_css' ) || get_rocket_option( 'minify_js' ) ) ) {
		$resources_version = null;
	}
	$parent_style = 'uncode-style';
	$child_style = array('uncode-style');
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/library/css/style.css', array(), $resources_version);
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/core/assets/css/minn-kota-custom.css', $child_style, $resources_version);
}

add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 5000);

function my_scripts_method() {
	wp_enqueue_script(
		'custom-script',
		get_stylesheet_directory_uri() . '/core/assets/js/minn-kota-custom.js',
		array( 'jquery' )
	 );
	 wp_enqueue_script('custom-script2', get_stylesheet_directory_uri().'/core/assets/js/minn-kota-custom2.js');
	 wp_enqueue_script('custom-script3', 'https://unpkg.com/@svgdotjs/svg.js@3.0.16/dist/svg.min.js');
	 wp_enqueue_script('custom-script4', 'https://unpkg.com/@svgdotjs/svg.panzoom.js@2.1.1/dist/svg.panzoom.min.js');
	 wp_enqueue_script('custom-script5', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.5.4/umd/popper.min.js');
}
add_action( 'wp_enqueue_scripts', 'my_scripts_method' );





add_action('wp_enqueue_scripts', 'override_woo_frontend_styles');
function override_woo_frontend_styles(){
    $file_general = $_SERVER['DOCUMENT_ROOT'] . '/core/assets/css/minn-kota-custom.css';
    if( file_exists($file_general) ){
        wp_dequeue_style('woocommerce-general');
        wp_enqueue_style('minn-kota-custom', get_stylesheet_directory_uri() . '/core/assets/css/minn-kota-custom.css');
    }
}

function my_dropdown_variation_attribute_options_html($html, $args){
    $html = str_replace('Choose an option', 'Select', $html);
    return $html;
}
add_filter('woocommerce_dropdown_variation_attribute_options_html', 'my_dropdown_variation_attribute_options_html', 10, 2);

add_action( 'woocommerce_reset_variations_link' , 'sd_change_clear_text', 15 );
function sd_change_clear_text() {
   echo '<a class="reset_variations" href="#">' . esc_html__( 'Reset Selection', 'woocommerce' ) . '</a>';
 
}



function update_woocommerce_version() {
	if(class_exists('WooCommerce')) {
		global $woocommerce;
		
		if(version_compare(get_option('woocommerce_db_version', null), $woocommerce->version, '!=')) {
			update_option('woocommerce_db_version', $woocommerce->version);
			
			if(! wc_update_product_lookup_tables_is_running()) {
				wc_update_product_lookup_tables();
			}
		}			
	}		
}
add_action('init', 'update_woocommerce_version');




add_shortcode( 'cl_product_price', 'cl_woo_product_price_shortcode' );
/**
 * Shortcode WooCommerce Product Price.
 *
 */
function cl_woo_product_price_shortcode( $atts ) {
	
	$atts = shortcode_atts( array(
		'id' => null
	), $atts, 'cl_product_price' );
 
	if ( empty( $atts[ 'id' ] ) ) {
		return '';
	}
 
	$product = wc_get_product( $atts['id'] );
 
	if ( ! $product ) {
		return '';
	}
 
	return $product->get_price_html();
}


add_filter( 'woocommerce_background_image_regeneration', '__return_false' );


?>
