import 'package:flutter/material.dart';
import 'package:flutter_website/screens/base.dart';
import 'package:flutter_website/styles.dart';
import 'package:parallax_image/parallax_image.dart';

class Portfolio extends StatefulWidget {
  @override
  _PortfolioState createState() => _PortfolioState();
}

class _PortfolioState extends State<Portfolio> {
  final _controller = new ScrollController();

  // var images = [
  //   AssetImage('assets/images/portfolio1.jpg'),
  //   AssetImage('assets/images/portfolio2.jpg'),
  //   AssetImage('assets/images/portfolio3.jpg'),
  //   AssetImage('assets/images/portfolio4.jpg'),
  //   AssetImage('assets/images/portfolio5.jpg'),
  // ];

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Coming soon...",
        style: normalTextDesktop,
      ),
    );

    // return new ListView.builder(
    //     itemCount: images.length,
    //     controller: _controller,
    //     scrollDirection: Axis.horizontal,
    //     itemBuilder: (context, index) {
    //       return Padding(
    //         padding: const EdgeInsets.all(16.0),
    //         child: Container(
    //           width: 600,
    //           decoration: ShapeDecoration(
    //             shape: ContinuousRectangleBorder(
    //                 borderRadius: BorderRadius.circular(24)),
    //           ),
    //           child: ParallaxImage(
    //             image: images[index],
    //             // Extent of this widget in scroll direction.
    //             // In this case it is vertical scroll so extent defines
    //             // the height of this widget.
    //             // The image is scaled with BoxFit.fitWidth which makes it
    //             // occupy full width of this widget.
    //             // After image is scaled it should normally have height greater
    //             // than this value to allow for parallax effect to be
    //             // visible.
    //             extent: MediaQuery.of(context).size.width * 0.5,

    //             // Optionally specify child widget.
    //             // Optinally specify scroll controller.
    //             controller: _controller,
    //           ),
    //         ),
    //       );
    //     }

    //     // ...add more list items
    //     );
  }
}
